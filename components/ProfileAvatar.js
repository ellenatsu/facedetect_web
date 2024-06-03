'use client'

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import ProfileModal from './ProfileModal';

const ProfileAvatar = ({ user, onRouteChange, loadUser }) => {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="d-flex p-5">
            {
                showModal && createPortal(
                    <ProfileModal onModalClose={() => setShowModal(false)} user={user} loadUser={loadUser} />,
                    document.getElementById('modal-root')
                )
            }
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
                <DropdownToggle tag="block" >
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEz3S7n71yl-E9EZQSu0GI3EbWJaqo4iJ6w&s"
                        className="br4 h3 w3 dib"
                        alt="avatar"
                    />
                </DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem onClick={() => setShowModal(true)}>
                        View Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => onRouteChange('signout')}>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default ProfileAvatar