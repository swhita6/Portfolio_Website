import React from 'react'

function Contact() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bd60927c-1a90-4535-bd2a-0e7dedb75ea1");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <section id='contact' className='contact-section'>
        <h1 className='section-title'>Contact</h1>
        <form onSubmit={onSubmit}>
            <div className='formGroup'>
                <label htmlFor='name' hidden>Name</label>
                <input type='text' name='name' id='name' placeholder='Name' required></input>

            </div>
            <div className='formGroup'>
                <label htmlFor='email' hidden>Email</label>
                <input type='email' name='email' id='email' placeholder='Email' required></input>
                
            </div>
            <div className='formGroup'>
                <label htmlFor='message' hidden>Email</label>
                <textarea type='text' name='message' id='message' placeholder='Message' required></textarea>
            </div>

            <input class="btn btn-light" className='btn' type='submit' value="Submit"></input>
        </form>
        <span>{result}</span>
    </section>
  )
}

export default Contact
