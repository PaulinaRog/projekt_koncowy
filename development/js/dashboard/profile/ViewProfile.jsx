import React, { useEffect, useState } from "react";
import supabase from "../../contexts/supabaseClient";
import ViewPetProfile from "./ViewPetProfile";
import ViewSitterProfile from "./ViewSitterProfile";

export default function ViewProfile({ id }) {
  const [owner, setOwner] = useState(null);
  const [sitter, setSitter] = useState(null);

  useEffect(() => {
    const checkProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("ownerOrSitter")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        data.ownerOrSitter === "owner" ? setOwner("owner") : null;
        data.ownerOrSitter === "sitter" ? setSitter("sitter") : null;
      }
    };
    checkProfile();
  }, []);

  return (
    <>
      {owner && (
        <>
          <ViewPetProfile id={id} />
        </>
      )}
      {sitter && (
        <>
          <ViewSitterProfile id={id} />
        </>
      )}
    </>
  );
}
