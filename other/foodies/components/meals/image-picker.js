"use client";

import { useState, useRef } from "react";
import classes from "./image-picker.module.css";
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState();
	
	const imageInput = useRef();

	function handlePickClick() {
		imageInput.current.click();
	}

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

	return (
		<div className={classes.picker}>
			<label htmlFor="image">{label}</label>
			<div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>				
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image.png, image/jpeg"
					name={name}
					ref={imageInput}
					onChange={handleImageChange}
					required
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
}

// export default function ImagePicker({ label, name }) {
// 	return (
// 		<div className="classes.picker">
// 			<label htmlFor="image">{label}</label>
// 			<div className={classes.controls}>
// 				<input
// 					type="file"
// 					id={name}
// 					accept="image.png, image/jpeg"
// 					name={name}
// 				></input>
// 			</div>
// 		</div>
// 	);
// }

// 'use client';

// import { useRef } from 'react';

// import classes from './image-picker.module.css';

// export default function ImagePicker({ label, name }) {
//   const imageInput = useRef();

//   function handlePickClick() {
//     imageInput.current.click();
//   }

//   return (
//     <div className={classes.picker}>
//       <label htmlFor={name}>{label}</label>
//       <div className={classes.controls}>
//         <input
//           className={classes.input}
//           type="file"
//           id={name}
//           accept="image/png, image/jpeg"
//           name={name}
//           ref={imageInput}
//         />
//         <button
//           className={classes.button}
//           type="button"
//           onClick={handlePickClick}
//         >
//           Pick an Image
//         </button>
//       </div>
//     </div>
//   );
// }
