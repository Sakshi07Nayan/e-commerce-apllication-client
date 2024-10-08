import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../store/actions/userActions';
import { fetchUserOrders } from '../store/actions/orderActions';
import ProfileForm from '../components/profile/ProfileForm';
import OrderHistory from '../components/profile/OrderHistory';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.user);
  const { orders } = useSelector(state => state.orders);

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchUserOrders());
  }, [dispatch]);

  const handleProfileUpdate = (updatedProfile) => {
    dispatch(updateUserProfile(updatedProfile));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <ProfileForm user={user} onSubmit={handleProfileUpdate} />
      <OrderHistory orders={orders} />
    </div>
  );
};

export default ProfilePage;
