import React from 'react';
import { BlogPost, Service } from '../types';
import { Calculator, TrendingUp, FileText, Scale, Users, PieChart } from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Direct & Indirect Taxation",
    description: "Expert IT return filing, GST compliance, and strategic tax planning to minimize liabilities legally.",
    icon: <Calculator className="w-8 h-8 text-secondary" />,
  },
  {
    id: 2,
    title: "Auditing & Assurance",
    description: "Comprehensive statutory audits, internal audits, and tax audits ensuring total financial accuracy.",
    icon: <FileText className="w-8 h-8 text-secondary" />,
  },
  {
    id: 3,
    title: "Business Advisory",
    description: "Strategic guidance for startups, company registration, and scaling your business operations.",
    icon: <TrendingUp className="w-8 h-8 text-secondary" />,
  },
  {
    id: 4,
    title: "GST Consultancy",
    description: "End-to-end GST solutions including registration, return filing, and handling departmental notices.",
    icon: <Scale className="w-8 h-8 text-secondary" />,
  },
  {
    id: 5,
    title: "Financial Planning",
    description: "Personalized investment planning and wealth management strategies for long-term growth.",
    icon: <PieChart className="w-8 h-8 text-secondary" />,
  },
  {
    id: 6,
    title: "Bookkeeping",
    description: "Maintaining accurate ledgers and financial statements to keep your business organized.",
    icon: <Users className="w-8 h-8 text-secondary" />,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Understanding New Income Tax Slabs FY 2024-25",
    excerpt: "A detailed breakdown of the new tax regime versus the old regime. Which one saves you more money?",
    date: "October 15, 2024",
    category: "Taxation",
    image: "https://picsum.photos/seed/tax/800/450",
    content: `
      <p>The financial landscape of India is constantly evolving, and the latest budget has introduced significant changes to the income tax slabs. For many taxpayers, the choice between the New Tax Regime and the Old Tax Regime remains a point of confusion.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Key Changes in the New Regime</h3>
      <p>The government has clearly signaled its intent to make the New Tax Regime the default option. The basic exemption limit has been raised to ₹3 Lakhs. Furthermore, the standard deduction of ₹50,000, which was previously only available in the old regime, has now been extended to the new regime as well.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Slab Rates Breakdown</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Up to ₹3 Lakh:</strong> Nil</li>
        <li><strong>₹3 Lakh to ₹6 Lakh:</strong> 5%</li>
        <li><strong>₹6 Lakh to ₹9 Lakh:</strong> 10%</li>
        <li><strong>₹9 Lakh to ₹12 Lakh:</strong> 15%</li>
        <li><strong>₹12 Lakh to ₹15 Lakh:</strong> 20%</li>
        <li><strong>Above ₹15 Lakh:</strong> 30%</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Strategic Planning</h3>
      <p>While the new regime offers lower rates, it disallows most deductions like Section 80C (LIC, PPF), 80D (Health Insurance), and HRA. If your total deductions exceed ₹3.75 Lakhs, you might still benefit from the Old Regime. It is crucial to calculate your tax liability under both methods before filing.</p>
      
      <p>Consulting with a Chartered Accountant can help you navigate these complexities and ensure you are not paying more tax than necessary.</p>
    `
  },
  {
    id: 2,
    title: "5 Common GST Filing Mistakes to Avoid",
    excerpt: "Small businesses often face penalties due to simple errors. Here is how to ensure your GST compliance is flawless.",
    date: "September 28, 2024",
    category: "GST",
    image: "https://picsum.photos/seed/gst/800/450",
    content: `
      <p> Goods and Services Tax (GST) simplified the indirect tax structure in India, but compliance remains a rigorous process. Non-compliance or errors can lead to hefty penalties and interest. Here are the most common mistakes businesses make.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">1. Incorrect HSN/SAC Codes</h3>
      <p>Using the wrong Harmonized System of Nomenclature (HSN) code is a frequent error. This can lead to incorrect tax rates being applied. Always verify the HSN code for your specific goods or services.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Mismatch Between GSTR-3B and GSTR-1</h3>
      <p>Your sales declaration in GSTR-1 must match the tax liability declared in GSTR-3B. Discrepancies often trigger notices from the tax department.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Claiming Ineligible Input Tax Credit (ITC)</h3>
      <p>Not all GST paid on purchases is claimable. For instance, GST paid on food and beverages, or personal use vehicles, is generally blocked. Claiming this credit can lead to demand notices with interest.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Ignoring Reverse Charge Mechanism (RCM)</h3>
      <p>Many small business owners forget that they are liable to pay tax on certain purchases from unregistered dealers or specific services like legal fees or transport agency services.</p>

      <p>Regular reconciliation and timely professional advice are your best defenses against these errors.</p>
    `
  },
  {
    id: 3,
    title: "Why Auditing is Crucial for Startups",
    excerpt: "Beyond compliance, auditing provides a health check for your business finances, essential for funding and growth.",
    date: "September 10, 2024",
    category: "Business",
    image: "https://picsum.photos/seed/audit/800/450",
    content: `
      <p>Startups often view auditing as a statutory burden—something to be done just to satisfy the law. However, a well-conducted audit is a powerful tool for business growth.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Building Investor Confidence</h3>
      <p>If you are looking for Venture Capital or Angel Investment, audited financial statements are non-negotiable. Investors rely on these documents to verify your revenue claims, margins, and burn rate.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Internal Control Health Check</h3>
      <p>Auditors don't just look at numbers; they look at processes. An audit can reveal weaknesses in your internal controls—such as loose expense approvals or inventory leakage—that might be bleeding your startup dry without you realizing it.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Valuation Accuracy</h3>
      <p>Correct valuation is essential for equity dilution during funding rounds. Audited books ensure that the valuation is based on concrete data rather than speculative projections.</p>

      <p>At Sanjay Kumar Basak & Co., we specialize in startup audits that go beyond compliance to add real value to your business operations.</p>
    `
  }
];