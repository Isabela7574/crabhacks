@import url('https://fonts.cdnfonts.com/css/black-chancery');
/* sign in */
#signIn{
    color:grey; 
}


/* home */
html{
    background-color: #F7B2BD;
    font-family: 'Times New Roman', Times, serif;
    color:#297373; 
    
}

h1{
    text-align: center;
    font-family: 'BlackChancery', sans-serif;
    font-size: 3em;
    color:#297373; 
}

hr{
display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #297373;
  margin: 1em 0;
  padding: 0;
}

.credits{
    text-align: center;
}

p{
    color:black; 
}
/* drop down box */
select {
    padding: 10px;
    font-size: 16px;
    width: 200px;
    border: 2px solid #297373;
    border-radius: 5px;
    background-color: #f0f8ff;
    color: #333;
    appearance: none; /* For better styling in some browsers */
    cursor: pointer;
  }

  /* Style for options inside the dropdown */
  select option {
    background-color: #ffffff;
    color: #333;
    padding: 10px;
  }

  /* Optional: Add a custom arrow icon */
  select::-ms-expand {
    display: none; /* Hides the default arrow for Internet Explorer */
  }

  /* Custom styles for the dropdown container */
  .dropdown-container {
    position: relative;
    display: inline-block;
  }

  /* Optional: Add a custom arrow icon */
  .dropdown-container::after {
    content: "▼";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #297373;
    font-size: 18px;
  }

 /* Style for the button */
 button {
    padding: 10px 20px;
    font-size: 16px;
    width: 200px;
    border: 2px solid #297373;
    border-radius: 5px;
    background-color: #ffffff;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Hover effect for the button */
  button:hover {
    background-color: #297373;
    color: white;
  }

  .selectLikedMovie, .nextSubmitButton {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.label{
    text-align: center;
    color: #297373;
}

img{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
