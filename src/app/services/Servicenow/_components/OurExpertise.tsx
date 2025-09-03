"use client";
import React from 'react';
import {
  ArrowUpRight,
  Monitor,
  Users,
  TrendingUp,
  Settings,
  Server,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
// Define the service type
interface ServiceProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  variant?: 'light' | 'dark';
  onClick?: () => void;
  href?: string;
}

// Individual Service Card Component
const ServiceCard: React.FC<ServiceProps> = ({
  title,
  subtitle,
  icon,
  variant = 'light',
  onClick,
  href
}) => {
  const isLight = variant === 'light';

  const handleClick = () => {
    if (href) {
      // For client-side navigation (Next.js router or similar)
      window.location.href = href;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`
        relative p-6 md:p-8 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md cursor-pointer group h-48 md:h-56 lg:h-64
        ${isLight
          ? 'bg-white border-[#007ba8] hover:border-[#007ba8]'
          : 'bg-[#007ba8] border-blue-800 hover:border-blue-700'
        }
      `}
      onClick={handleClick}
    >
      <div className={`mb-6 ${isLight ? 'text-[#007ba8]' : 'text-white'}`}>
        <div className="w-12 h-12">{icon}</div>
      </div>

      <div className="mb-4">
        <h3 className={`text-lg md:text-xl font-medium leading-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-sm md:text-base mt-1 ${isLight ? 'text-gray-600' : 'text-blue-100'}`}>
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-6 right-6">
        <div className={`
          w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110
          ${isLight
            ? 'border-[#007ba8] text-gray-600 group-hover:border-[#007ba8] group-hover:text-[#007ba8]'
            : 'border-blue-300 text-blue-300 group-hover:border-white group-hover:text-white'
          }
        `}>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};

interface ServicesGridProps {
  services: Array<{
    id: string;
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    variant?: 'light' | 'dark';
    onClick?: () => void;
    href?: string;
  }>;
  className?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, className = '' }) => {
  const totalServices = services.length;
  const remainder = totalServices % 3;

  return (
    <div className={`${className}`}>
      <div className={`
        grid gap-6
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        ${remainder === 1 ? 'lg:[&>*:last-child]:col-start-2' : ''}
        ${remainder === 2 ? 'lg:[&>*:nth-last-child(-n+2):first-of-type]:col-start-1' : ''}
      `}>
        {services.map((service, index) => (
          <ServiceCard
            key={`${service.id}-${index}`}
            title={service.title}
            subtitle={service.subtitle}
            icon={service.icon}
            variant={service.variant}
            onClick={service.onClick}
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesExample: React.FC = () => {
  const servicesData = [
    {
      id: 'itsm',
      title: 'IT Service Management',
      subtitle: '(ITSM)',
      icon: <Monitor className="w-full h-full" />,
      variant: 'light' as const,
      href: "/services/Servicenow/itsm"
    },
    {
      id: 'csm',
      title: 'Customer Services Management',
      subtitle: '(CSM)',
      icon: <Users className="w-full h-full" />,
      variant: 'dark' as const,
      href: "/services/Servicenow/csm"
    },
    {
      id: 'spm',
      title: 'Strategic Portfolio Management',
      subtitle: '(SPM)',
      icon: <TrendingUp className="w-full h-full" />,
      variant: 'light' as const,
      href: "/services/Servicenow/spm"
    },
    {
      id: 'ham-sam',
      title: 'IT Asset Management',
      subtitle: '(HAM/SAM)',
      icon: <Settings className="w-full h-full" />,
      variant: 'dark' as const,
      href: "/services/Servicenow/itam"
    },
    {
      id: 'itom',
      title: 'IT Operations Management',
      subtitle: '(ITOM)',
      icon: <Server className="w-full h-full" />,
      variant: 'light' as const,
      href: "/services/Servicenow/itom"
    },
    {
      id: 'hrsd',
      title: 'Human Resource Service Delivery',
      subtitle: '(HRSD)',
      icon: <UserCheck className="w-full h-full" />,
      variant: 'dark' as const,
      href: "/services/Servicenow/hrsd"
    },
    {
      id: 'wsd',
      title: 'WorkPlace Service Delivery',
      subtitle: '(WSD)',
      icon: <Server className="w-full h-full" />,
      variant: 'light' as const,
      href: "/services/Servicenow/wsd"
    },
    {
      id: 'irm',
      title: 'Integrated Risk Management',
      subtitle: '(IRM)',
      icon: <Server className="w-full h-full" />,
      variant: 'dark' as const,
      href: "/services/Servicenow/irm"
    },
    {
      id: 'secops',
      title: 'Security Operations Management (SecOps)',
      subtitle: '(SecOps)',
      icon: <Server className="w-full h-full" />,
      variant: 'light' as const,
      href: "/services/Servicenow/secops"
    },
    {
      id: 'fsm',
      title: 'Field Service Management',
      subtitle: '(FSM)',
      icon: <Server className="w-full h-full" />,
      variant: 'light' as const,
      href: "/services/Servicenow/fsm"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="text-black font-medium text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.2] mb-8">
            Expertise
          </div>
          <p className="text-gray-700 text-base md:text-lg lg:text-[18px] leading-relaxed font-normal mb-8">
            EnableNow boasts extensive expertise in ServiceNow, spanning various areas within the platform. Our 
            team of certified ServiceNow professionals has deep knowledge and hands-on experience in 
            implementing, customizing, and optimizing ServiceNow solutions to meet diverse business needs.
          </p>
          <div className="text-gray-800 font-medium text-base md:text-lg lg:text-[18px] mb-12">
            Our Platform expertise includes:
          </div>
        </div>

        <ServicesGrid services={servicesData} />

        {/* End Section */}
        <div className="text-center max-w-4xl mx-auto mt-16">
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
            Additionally, our proficiency extends to ServiceNow's advanced capabilities. We excel in deploying
            end-to-end solutions that streamline workflows, enhance collaboration, and drive digital transformation.
          </p>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-10">
            EnableNow is your trusted partner for harnessing the full potential of ServiceNow. Our expertise, dedication,
            and commitment to excellence will help you achieve your business objectives.
          </p>
         <Link href="/contact-us" >
          <button
            className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 font-semibold px-8 py-4 rounded-md transition duration-300"
            onClick={() => console.log('Let Us Talk clicked')}
          >
            LET US TALK
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesExample;
export { ServiceCard, ServicesGrid };