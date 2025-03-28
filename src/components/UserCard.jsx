import { Card, CardContent, Typography, Button, CardActions, Avatar } from '@mui/material';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Avatar src={user.avatar} alt={user.first_name} sx={{ width: 56, height: 56, mb: 1 }} />
        <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
        <Typography variant="body2" color="text.secondary">{user.email}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onEdit}>Edit</Button>
        <Button size="small" color="error" onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
