import { supabase } from "../db/dbsUpabase.js";
import bcrypt from 'bcrypt';

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
  try {
    const { data, error } = await supabase
      .from("players")
      .update([{ listTime: user.listTime }])
      .match({ id: user.id });
    if (error) {
      console.error("Error updating player:", error.message);
      return null;
    }
    return data;
  } catch (error) {
    console.log('error update', error.message);
  }
}

export async function create(user) {
  console.log('user crate ', user);
  const name = user.player.name;
  const password = await bcrypt.hash(user.player.password,10)
  const { data, error } = await supabase
    .from("players")
    .insert({
      name, 
      password,
      listTime:[]
    })
    .select("*");
  if (error) {
    console.error("Error creating user:", error.message);
    return null;
  }
  console.log("User created successfully:", data);
  return data;
}

export async function getByName(name) {
  try {
    const { data, error } = await supabase
      .from('players')
      .select()
      .eq('name', name);
    if (error) {
      console.error("Error fetching player by ID:", error.message);
      return null;
    }
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.log('error fetching player by ID:', error.message);
    return null;
  }
}

