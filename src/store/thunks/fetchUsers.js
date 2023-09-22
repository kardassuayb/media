import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // DEV ONLY!!
  await pause(10000);

  return response.data;
});

// DEV ONLY !!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

//! createAsyncThunk fonksiyonu oluşturulduğunda pending, fulfilled, ve rejected özellikleri redux toolkit tarafından otomatik olarak sağlanır. Bu özellikleri slice içerisinde yazarken manuel olarak kullanmak yerine aşağıdaki gibi fonksiyon adına özellik ekleyerek kullanabiliriz:

/*
fetchUsers.pending === "users/fetch/pending"
fetchUsers.fulfilled === "users/fetch/fulfilled"
fetchUsers.rejected === "users/fetch/rejected"
*/

export { fetchUsers };
