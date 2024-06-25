import React from 'react';

const Home = ({arrObj}) => {
    return (
      <div>
        <div class="card-group">
            {arrObj.map((item, index)=>{
                return (
                    <>
                    <div class="card" key={index}>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.designation}
              </p>
              <p class="card-text">
                <small class="text-muted">{item.id}</small>
              </p>
            </div>
          </div>
                    </>
                )
            })}
          
        </div>
      </div>
    );
};

export default Home;