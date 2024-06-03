import React, {useState} from 'react'
import "@/app/globals.css"


const ProfileModal = ({ onModalClose, user, loadUser }) => {

    const [formValues, setFormValues] = useState({
        name: user.name,
        about: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (data) => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/profile/${user.id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formInput: data})
        }).then(resp => {
            if (resp.ok) {
                loadUser({ ...user, name: data.name })
                onModalClose();
            } else {
                resp.json().then(errorData => {
                    console.error('Error:', errorData);
                    alert('An error occurred. Please try again.');
                });
            }
        }).catch(error => {
            //network or other errors
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });

    }

    return (
        <div className='modal-overlay'>
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white'>
                <main className='pa4 black-80 w-80'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEz3S7n71yl-E9EZQSu0GI3EbWJaqo4iJ6w&s" className="h3 w3 dib" alt="user avatar" />
                    <h1 className="f3">{user.name}</h1>
                    <h2 className="f6 gray fw2">You have detected {user.entries} pictures</h2>
                    <hr />
                    <div className="mt3">
                        <label className="db fw4 f6" htmlFor="name">Name</label>
                        <input className="ba pa2 w-100" type="text" name="name" placeholder={user.name} onChange={handleInputChange} />
                    </div>
                    <div className="mt3">
                        <label className="db fw4 f6" htmlFor="about">About me</label>
                        <p className="pa2">can't update right now... database updating...</p>
                        {/* <input className="ba pa2 w-100" type="text" name="about" /> */}
                    </div>

                    <div className='mt4' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                            onClick={() => handleSubmit(formValues)}>
                            Save
                        </button>
                        <button className='b pa2 grow pointer hover-white w-40 bg-light-gray b--black-20'
                            onClick={onModalClose}>
                            Cancel
                        </button>
                    </div>
                </main>
                <div className='modal-close' onClick={onModalClose}>&times;</div>
            </article>
        </div>
    )
}

export default ProfileModal