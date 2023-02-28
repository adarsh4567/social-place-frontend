import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";


const FriendListWidget = ({ userId }) => {
    const { palette } = useTheme();
    const users = useSelector((state)=> state.users);
     const suggestedUser = users.slice(0,4);
     if(!users){
      return <>
         <Skeleton variant="rounded" width={340} height={400} />
      </>
     }
    return (
      <WidgetWrapper>
        <Typography
          color={palette.neutral.dark}
          variant="h5"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          Suggested Users
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
          {suggestedUser.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))}
        </Box>
      </WidgetWrapper>
    );
  };
  
  export default FriendListWidget;