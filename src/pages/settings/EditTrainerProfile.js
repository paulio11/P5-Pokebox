import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/AxiosDefaults";
import { Button, Form, Image } from "react-bootstrap";

const EditTrainerProfile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({
    about: "",
    avatar: "",
    display_name: "",
    favorite_pkmn: "",
  });
  const { about, avatar, display_name, favorite_pkmn } = profileData;
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const avatarFile = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}`);
          const { about, avatar, display_name, favorite_pkmn } = data;
          setProfileData({ about, avatar, display_name, favorite_pkmn });
        } catch (error) {
          // not the user's profile
        }
      }
    };
    handleMount();
  }, [currentUser, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("about", about);
    formData.append("display_name", display_name);
    formData.append("favorite_pkmn", favorite_pkmn);

    if (avatarFile?.current?.files[0]) {
      formData.append("avatar", avatarFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_avatar: data.avatar,
      }));
      navigate(`/trainer/${currentUser?.profile_id}`);
    } catch (error) {}
  };

  return (
    <>
      <h1>Editing Profile</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {avatar && <Image src={avatar} width={200} />}
          <Form.Label htmlFor="avatar-upload">Change Avatar</Form.Label>
          <Form.Control
            type="file"
            id="avatar-upload"
            ref={avatarFile}
            accept="images/*"
            onChange={(e) => {
              if (e.target.files.length) {
                setProfileData({
                  ...profileData,
                  avatar: URL.createObjectURL(e.target.files[0]),
                });
              }
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            value={about}
            onChange={handleChange}
            name="about"
            rows={4}
          />
        </Form.Group>
        <Button onClick={() => navigate(-1)}>Cancel</Button>
        <Button type="submit">Save Changes</Button>
      </Form>
    </>
  );
};

export default EditTrainerProfile;
