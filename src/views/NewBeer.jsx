import React from "react"
import { useEffect, useState } from "react";
import beerService from "../services/beerService";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBeer = await beerService.createBeer(formData);
      console.log(newBeer);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "attenuation_level" ? parseInt(value, 10) : value,
    }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
      </label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
      <label>
        Tagline
      </label>
      <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
      <label>
        Description
      </label>
      <textarea rows={3} type="text" name="description" value={formData.description} onChange={handleChange} required/>
      <label>
        First Brewed
      </label>
      <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} required/>
      <label>
        Brewers Tips
      </label>
      <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} required />
      <label>
        Attenuation Level
      </label>
      <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} required />
      <label>
        Contributed By
      </label>
      <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} required/>
      
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default NewBeer;
