import React from "react";

const DietForm: React.FC = () => {
  return (
    <>
      <h1>SPECIAL DIET REQUEST FORM</h1>
      <div>
        <label>School</label>
        <input type="text" name="school" id="" />
      </div>

      <div>
        <label>Child's Name</label>
        <input type="text" name="childs-name" id="" />
      </div>

      <div>
        <label>Class</label>
        <input type="text" name="class" id="" />
      </div>
      <p>Please specify the type of diet requested:</p>
      <div>
        <label>
          Medically prescribed diet
          <small>food intolerances, allergens, e.g eggs, gluten, nuts</small>
        </label>
        <textarea name="diet-medical" id="" cols="30" rows="5"></textarea>
      </div>

      <div>
        <label>
          Religious
          <small>eg Halal, Hindu</small>
        </label>
        <textarea name="diet-religious" id="" cols="30" rows="5"></textarea>
      </div>

      <div>
        <label>
          Ethical
          <small>Vegetarian, Vegan</small>
        </label>
        <textarea name="diet-ethical" id="" cols="30" rows="5"></textarea>
      </div>

      <div>
        <input type="button" value="Submit" />
      </div>
    </>
  );
};
export default DietForm;
