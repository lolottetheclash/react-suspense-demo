const ProfileDetails = resource => {
  const user = resource.user.read();

  return (
    <div>
      <h2>{user.name}</h2>
      <ul>
        <li>{user.email}</li>
        <li>{user.address.city}</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
