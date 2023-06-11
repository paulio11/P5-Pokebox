import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/AxiosDefaults";

// Code from Code Institue Moments Lessons

// Used within the react-infinite-scroll component.
export const fetchMoreData = async (resource, setResource) => {
  const setCurrentNotification = useSetCurrentNotification();
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

// Decodes JWT token, extracts the expiration timestamp (stored in the exp field).
// Saves it to local storage.
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// Checks if the token timestamp exists in local storage.
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// Removes the stored token timestamp from local storage.
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
