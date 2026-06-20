// src/pages/dashboard/index.jsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useApi } from '../../hooks/useApi';
import MainLayout from '../../components/layout/MainLayout';
import AdminDashboard from './admin/AdminDashboard';
import ChurchDashboard from './church/ChurchDashboard';
import MemberDashboard from './member/MemberDashboard';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        // Buscar dados específicos baseado no role
        const data = await getDashboardData(user.role);
        setDashboardData(data);
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading || isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <LoadingSpinner />
        </div>
      </MainLayout>
    );
  }

  const renderDashboard = () => {
    switch(user?.role) {
      case 'admin':
        return <AdminDashboard data={dashboardData} />;
      case 'church':
        return <ChurchDashboard data={dashboardData} />;
      case 'member':
        return <MemberDashboard data={dashboardData} />;
      default:
        return <div>Role não reconhecida</div>;
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          {user && (
            <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
              {getRoleLabel(user.role)}
            </span>
          )}
        </div>
        
        {renderDashboard()}
      </div>
    </MainLayout>
  );
};

// Helper para buscar dados específicos do dashboard
const getDashboardData = async (role) => {
  switch(role) {
    case 'admin':
      return {
        statistics: await fetchAdminStats(),
        churches: await fetchChurches(),
        users: await fetchUsers()
      };
    case 'church':
      return {
        members: await fetchChurchMembers(),
        pending: await fetchPendingMembers(),
        stats: await fetchChurchStats()
      };
    case 'member':
      return {
        profile: await fetchUserProfile(),
        church: await fetchMemberChurch()
      };
    default:
      return null;
  }
};

const getRoleLabel = (role) => {
  const labels = {
    admin: 'Administrador',
    church: 'Igreja',
    member: 'Membro'
  };
  return labels[role] || role;
};

export default Dashboard;