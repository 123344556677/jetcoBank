import React from 'react'

const FormTopBar = ({buttonValue}) => {
  return (
    <div className="top-bar">
      <div className="d-flex align-items-center justify-content-center mr-lg-3">
        <div className="d-flex align-items-center">
          <h3 className='form-top-text m-3'>Add {buttonValue}</h3>
        </div>
      </div>
    </div>
  )
}

export default FormTopBar