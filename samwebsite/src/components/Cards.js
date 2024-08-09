import React from 'react'

function Cards() {
  return (
    <div className='card-section'>
        <div class='card-header'>
            <h1>Projects</h1>
        </div>
        <div class="card-container">
            <div class="card">
                <a href='...' target='_blank'>
                    <img class="card-img" src="https://via.placeholder.com/150" alt="Card image cap"></img>
                </a>
                <div class="card-body">
                    <p class="card-text">Example Project 1</p>
                </div>
            </div>
            <div class="card">
            <a href='...' target='_blank'>
                    <img class="card-img" src="https://via.placeholder.com/150" alt="Card image cap"></img>
            </a>            
            <div class="card-body">
                <p class="card-text">Example Project 2</p>
            </div>
            </div>
            <div class="card">
            <a href='...' target='_blank'>
                <img class="card-img" src="https://via.placeholder.com/150" alt="Card image cap"></img>
            </a>
                <div class="card-body">
                    <p class="card-text">Example Project 3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
