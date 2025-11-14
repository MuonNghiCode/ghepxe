"use client";

import * as React from "react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {/* Dialog Content */}
      <div className="relative z-50 w-full max-w-4xl max-h-[90vh] mx-4">
        {children}
      </div>
    </div>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function DialogContent({ children, onClose }: DialogContentProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <X className="w-5 h-5 text-gray-600" />
      </button>
      {children}
    </div>
  );
}

interface DialogHeaderProps {
  children: React.ReactNode;
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[var(--primary-green)]/10 to-[var(--secondary-green)]/10">
      {children}
    </div>
  );
}

interface DialogTitleProps {
  children: React.ReactNode;
}

export function DialogTitle({ children }: DialogTitleProps) {
  return <h2 className="text-2xl font-bold text-gray-900">{children}</h2>;
}

interface DialogDescriptionProps {
  children: React.ReactNode;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
  return <p className="text-sm text-gray-600 mt-1">{children}</p>;
}

interface DialogBodyProps {
  children: React.ReactNode;
}

export function DialogBody({ children }: DialogBodyProps) {
  return (
    <div className="px-6 py-6 max-h-[calc(90vh-180px)] overflow-y-auto">
      {children}
    </div>
  );
}

interface DialogFooterProps {
  children: React.ReactNode;
}

export function DialogFooter({ children }: DialogFooterProps) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3">
      {children}
    </div>
  );
}
