import React, { useState } from 'react';
import '../../CSS/BrandForm.css';

import { 
  FaFacebook,
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTrash, 
  FaPhoneAlt,
  FaMoneyBillWave
} from 'react-icons/fa';
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdLink, IoMdAdd, IoMdMale } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { RiPriceTagLine } from "react-icons/ri";
import { GiPositionMarker, GiBoxingGloveSurprise  } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { TbBrandComedyCentral } from "react-icons/tb";
import { PiGenderFemaleBold } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";

const BrandForm = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    phone: '',
    brandDescription: '',
    pageUrl: '',
    goal: '',
    products: [{ name: '', price: '' }],
    topSellingList: [{ name: '', price: '' }],
    launchDate: '',
    socialMediaObjectives: [''],
    targetAudience: [''],
    targetGender: '',
    targetAgeSpan: '',
    socialPlatforms: [''],
    brandTagline: '',
    brandPositioning: '',
    competitiveAdvantage: '',
    competitors: [''],
    budget: '',
    currentOffers: [''],
    pointsToNotice: [''],
    notes: ''
  });

  const [disabledPlatforms, setDisabledPlatforms] = useState([]);

  const socialMediaOptions = [
    { name: 'Facebook', icon: <FaFacebook />, color: '#1877F2' },
    { name: 'X.com', icon: <FaSquareXTwitter />, color: '#14171A' },
    { name: 'Instagram', icon: <FaInstagram />, color: '#c32aa3' },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0077b5' },
    { name: 'YouTube', icon: <FaYoutube />, color: '#ff0000' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, field, index) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addPlatformArrayField = (fieldName, platformName) => {
    if (!formData[fieldName].includes(platformName)) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: [...prevData[fieldName], platformName],
      }));
      setDisabledPlatforms((prev) => [...prev, platformName]); // Disable the platform
    }
  };

  const addArrayField = (fieldName, platformName) => {
    if (platformName) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: [...prevData[fieldName], platformName],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: [...prevData[fieldName], ''],
      }));
    }
  };
  

  const removePlatform = (platformName) => {
    setFormData((prevData) => ({
      ...prevData,
      socialPlatforms: prevData.socialPlatforms.filter((platform) => platform !== platformName),
    }));
    setDisabledPlatforms((prev) => prev.filter((platform) => platform !== platformName)); // Re-enable the platform
  };

  const removeCompetitor = (competitorToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      competitors: prevData.competitors.filter((competitor) => competitor !== competitorToRemove),
    }));
  };
  

  const removeOffer = (offerToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      currentOffers: prevData.currentOffers.filter((offer) => offer !== offerToRemove),
    }));
  };
  
  const removePoint = (pointToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      pointsToNotice: prevData.pointsToNotice.filter((point) => point !== pointToRemove),
    }));
  };

  const removeAudience = (audienceToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      targetAudience: prevData.targetAudience.filter((audience) => audience !== audienceToRemove),
    }));
  };

  const removeObjective = (objectiveToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      socialMediaObjectives: prevData.socialMediaObjectives.filter((objective) => objective !== objectiveToRemove),
    }));
  };

  const removeProduct = (productToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      products: prevData.products.filter((product) => product !== productToRemove),
    }));
  };

  const removeTopProduct = (productToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      topSellingList: prevData.topSellingList.filter((product) => product !== productToRemove),
    }));
  };

  const addProduct = () => {
    setFormData({
      ...formData,
      products: [...formData.products, { name: '', price: '' }]
    });
  };

  const addTopSellingProduct = () => {
    setFormData({
      ...formData,
      topSellingList: [...formData.topSellingList, { name: '', price: '' }]
    });
  };

  const addCompetitor = () => {
    setFormData({ ...formData, competitors: [...formData.competitors, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // log form data
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h2><span>Apply Now</span> to EX's</h2>

      <h3 className="section-title">Basic Information</h3>

      <div className="special-input-wrapper">
        <label className='label-basic-information'><HiOutlineMailOpen className='basic-information' /></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div className="special-input-wrapper">
        <label className='label-basic-information'><FaPhoneAlt className='basic-information' /></label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </div>

      <h3 className="section-title">Brand Information</h3>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Name
          <span className='brand-icon-spam'>
            <TbBrandComedyCentral className='brand-icon'/>
          </span>
        </label>
        <input
          type="text"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          placeholder="Brand Name"
        />
      </div>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Description
          <span className='brand-icon-spam'>
            <BiDetail className='brand-icon'/>
          </span>
        </label>
        <input
          type="text"
          name="brandDescription"
          value={formData.brandDescription}
          onChange={handleChange}
          placeholder="Brand Description"
        />
      </div>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Page URL
          <span className='brand-icon-spam'>
            <IoMdLink className='brand-icon'/>
          </span>
        </label>
        <input
          type="url"
          name="pageUrl"
          value={formData.pageUrl}
          onChange={handleChange}
          placeholder="Page URL"
        />
      </div>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Goal to Achieve
          <span className='brand-icon-spam'>
            <GoGoal className='brand-icon'/>
          </span>
        </label>
        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          placeholder="Goal"
        />
      </div>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Tagline
          <span className='brand-icon-spam'>
            <RiPriceTagLine className='brand-icon'/>
          </span>
        </label>
        <input
          type="text"
          name="brandTagline"
          value={formData.brandTagline}
          onChange={handleChange}
          placeholder="Brand Tagline"
        />
      </div>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Positioning
          <span className='brand-icon-spam'>
            <GiPositionMarker className='brand-icon'/>
          </span>
        </label>
        <input
          type="text"
          name="brandPositioning"
          value={formData.brandPositioning}
          onChange={handleChange}
          placeholder="Brand Positioning"
        />
      </div>

      <div className="input-wrapper">
        <label className='label-brand-information'>
          Competitive Advantage
          <span className='brand-icon-spam'>
            <GiBoxingGloveSurprise className='brand-icon'/>
          </span>
        </label>
        <input
          type="text"
          name="competitiveAdvantage"
          value={formData.competitiveAdvantage}
          onChange={handleChange}
          placeholder="Competitive Advantage"
        />
      </div>

      <div className="input-wrapper">
        <label 
          className='label-brand-information'
        >
          Budget Allocated 
          <span className='brand-icon-spam'>
            <FaMoneyBillWave className='brand-icon'/>
          </span>
        </label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Budget"
        />
      </div> <br />

      <h3 className="section-title">Competitors</h3>
      {formData.competitors.map((competitor, index) => (
        <div key={index} className="special-input-wrapper">
          <input
            type="text"
            placeholder="Competitor"
            value={competitor}
            onChange={(e) => handleArrayChange(e, 'competitors', index)}
          />
          <button type="button" onClick={() => removeCompetitor(competitor)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={addCompetitor}>
        <IoMdAdd />
      </button> <br /> <br />

      <h3 className="section-title">Products and Prices</h3>
      {formData.products.map((product, index) => (
        <div className="product-wrapper" key={index}>
          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => {
              const newProducts = [...formData.products];
              newProducts[index].name = e.target.value;
              setFormData({ ...formData, products: newProducts });
            }}
          />
          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => {
              const newProducts = [...formData.products];
              newProducts[index].price = e.target.value;
              setFormData({ ...formData, products: newProducts });
            }}
          />
          <button type="button" onClick={() => removeProduct(product)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={addProduct}>
        <IoMdAdd />
      </button> <br /> <br />

      <h3 className="section-title">Top Selling List</h3>
      {formData.topSellingList.map((product, index) => (
        <div className="product-wrapper" key={index}>
          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => {
              const newTopSelling = [...formData.topSellingList];
              newTopSelling[index].name = e.target.value;
              setFormData({ ...formData, topSellingList: newTopSelling });
            }}
          />
          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => {
              const newTopSelling = [...formData.topSellingList];
              newTopSelling[index].price = e.target.value;
              setFormData({ ...formData, topSellingList: newTopSelling });
            }}
          />
          <button type="button" onClick={() => removeTopProduct(product)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={addTopSellingProduct}>
        <IoMdAdd />
      </button> <br /> <br /> <br />

      <h3 className="section-title">Launch Date</h3>
      <div className="input-wrapper">
        <input
          type="date"
          name="launchDate"
          value={formData.launchDate}
          onChange={handleChange}
        />
      </div> <br /> <br />

      <h3 className="section-title">Target Audience</h3>
      {formData.targetAudience.map((audience, index) => (
        <div key={index} className="special-input-wrapper">
          <input
            type="text"
            placeholder="Target Audience"
            value={audience}
            onChange={(e) => handleArrayChange(e, 'targetAudience', index)}
          />
          <button type="button" onClick={() => removeAudience(audience)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={() => addArrayField('targetAudience')}>
        <IoMdAdd />
      </button> <br /> <br />

      {/* Target Audience Gender - Radio Buttons */}
      <h3 className="section-title">Audience Gender</h3>
      <div className="input-wrapper">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="targetGender"
              value="Male"
              checked={formData.targetGender === 'Male'}
              onChange={handleChange}
            />
            <IoMdMale className='gender-icon' />
          </label>
          <label>
            <input
              type="radio"
              name="targetGender"
              value="Female"
              checked={formData.targetGender === 'Female'}
              onChange={handleChange}
            />
            <PiGenderFemaleBold className='gender-icon' />
          </label>
        </div>
      </div>

      {/* Target Audience Age Span - Number Range */}
      <h3 className="section-title">Audience Ages</h3>
      <div className="input-wrapper">
        <div className="age-range-group">
          <input
            type="number"
            name="ageMin"
            value={formData.targetAgeSpan.min || ''}
            onChange={(e) => setFormData({ ...formData, targetAgeSpan: { ...formData.targetAgeSpan, min: e.target.value } })}
            placeholder="Min Age"
            min="0"
          />
          <span>to</span>
          <input
            type="number"
            name="ageMax"
            value={formData.targetAgeSpan.max || ''}
            onChange={(e) => setFormData({ ...formData, targetAgeSpan: { ...formData.targetAgeSpan, max: e.target.value } })}
            placeholder="Max Age"
            min="0"
          />
        </div>
      </div>

      <br />
      <h3 className="section-title">Social Media Platforms</h3>
      <h5 id='social-platform-instruction'>Click on the platform you aiming to add. <TbHandClick /></h5>
      <div className="social-media-options">
        {socialMediaOptions.map((option, index) => (
          <div
            key={index}
            className={`social-media-card ${disabledPlatforms.includes(option.name) ? 'disabled' : ''} special-input-wrapper`}
            onClick={() => addPlatformArrayField('socialPlatforms', option.name)}
            style={{ backgroundColor: option.color }}
          >
            {option.icon}
            <span>{option.name}</span>
          </div>
        ))}
      </div>
      {formData.socialPlatforms.map((platform, index) => (
        <div key={index} className="special-input-wrapper">
          <input
            type="text"
            placeholder="Social Media Platform"
            value={platform}
            readOnly
          />
          <button type="button" onClick={() => removePlatform(platform)} className="delete-button">
            <FaTrash />
          </button>
        </div> 
      ))}
      <br /> <br />

      <h3 className="section-title">Social Media Objectives</h3>
      {formData.socialMediaObjectives.map((objective, index) => (
        <div key={index} className="special-input-wrapper">
          <input
            type="text"
            placeholder="Social Media Objective"
            value={objective}
            onChange={(e) => handleArrayChange(e, 'socialMediaObjectives', index)}
          />
          <button type="button" onClick={() => removeObjective(objective)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={() => addArrayField('socialMediaObjectives')}>
        <IoMdAdd />
      </button> <br /> <br /> <br />

      <h3 className="section-title">Current Offers</h3>
      {formData.currentOffers.map((offer, index) => (
        <div key={index} className="special-input-wrapper">
          <input
            type="text"
            placeholder="Current Offer"
            value={offer}
            onChange={(e) => handleArrayChange(e, 'currentOffers', index)}
          />
          <button type="button" onClick={() => removeOffer(offer)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={() => addArrayField('currentOffers')}>
        <IoMdAdd />
      </button> <br /> <br /> <br />

      <h3 className="section-title">Points to Notice</h3>
      {formData.pointsToNotice.map((point, index) => (
        <div key={index} className="special-input-wrapper">
          <input
            type="text"
            placeholder="Point to Notice"
            value={point}
            onChange={(e) => handleArrayChange(e, 'pointsToNotice', index)}
          />
          <button type="button" onClick={() => removePoint(point)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      ))}
      <button className="add-button" type="button" onClick={() => addArrayField('pointsToNotice')}>
        <IoMdAdd />
      </button> <br /> <br />

      <h3 className="section-title">Notes</h3>
      <div className="input-wrapper">
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
        ></textarea>
      </div>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default BrandForm;