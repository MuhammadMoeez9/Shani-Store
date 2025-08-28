"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "super_admin";
}

interface AdminContextType {
  admin: AdminUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved admin in localStorage
    const savedAdmin = localStorage.getItem("luxe-admin");
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock admin authentication - in real app, this would be an API call
    if (email === "admin@luxe.com" && password === "admin123") {
      const newAdmin = {
        id: "admin-1",
        name: "Admin User",
        email,
        role: "admin" as const,
      };
      setAdmin(newAdmin);
      localStorage.setItem("luxe-admin", JSON.stringify(newAdmin));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("luxe-admin");
  };

  return (
    <AdminContext.Provider value={{ admin, login, logout, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
