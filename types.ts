import React from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Full content for the detail view
  date: string;
  image: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  // Contact Details
  email: string;
  phone: string;
  address: string;
  // Payment Details
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  ifscCode?: string;
  upiId?: string;
  qrCodeUrl?: string;
}

export type ViewState = 
  | 'home' 
  | 'blog-detail' 
  | 'service-detail'
  | 'privacy-policy' 
  | 'disclaimer' 
  | 'terms'
  | 'login'
  | 'admin-dashboard';