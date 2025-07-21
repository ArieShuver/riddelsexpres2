import { supabase } from "../db/dbsUpabase.js";

export async function getall() {  
  try {
    const { data, error } = await supabase
      .from('players')
      .select();
    if (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
    // console.log('all data', data);
    return data;

  }
  catch (error) {
    console.log('error fun get all', error.message);
    return null;
  }

}



export async function update(user) {
  const { data, error } = await supabase
    .from("players")
    .update(user)
    .match({ id: user.id });

  if (error) {
    console.error("Error updating player:", error.message);
    return null;
  }

  console.log("Player updated successfully:", data);
  return data;
}

export async function create(user) {
  console.log('user', user);

  const { data, error } = await supabase
    .from("players")
    .insert(user);
  if (error) {
    console.error("Error creating user:", error.message);
    return null;
  }

  console.log("User created successfully:", user);
  return user;
}

