/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import { IconButton } from "@mui/material";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import UploadIcon from "../../../public/upload-icon.svg";
import DeleteIcon from "../../../public/deleteIcon.svg";
import Image from "next/image";

export default function ImageUploader({
  images,
  setImages,
  handleDragEnd,
  imageUploader,
  handleFileInput,
  DeleteImage,
}: any) {
  return (
    <>
      <h5>Images</h5>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="addImageDragNDrop" direction="horizontal">
          {(provided: any) => (
            <div
              className="inventory-img-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className="upload-file-container">
                <input
                  className="uploadfile"
                  accept="image/*"
                  type="file"
                  ref={imageUploader}
                  onChange={handleFileInput}
                  multiple
                />
                <div className="upload-file-logo">
                  <Image src={UploadIcon} alt="Upload" height={30} width={30} />
                  <p>Browse to upload</p>
                </div>
                <div className="select-file">
                  <span>Select a file</span> or drag in form
                </div>
              </div>
              {images &&
                images
                  .sort(function (a: any, b: any) {
                    return a.imageOrder - b.imageOrder;
                  })
                  .map((item: any, index: number, array: any) => (
                    <Draggable
                      key={`addPriview-car-${index}`}
                      draggableId={`add-car-image-${index}`}
                      index={index}
                    >
                      {(providedItem: any) => (
                        <div
                          {...providedItem.draggableProps}
                          {...providedItem.dragHandleProps}
                          ref={providedItem.innerRef}
                          className="img-card-wrapper"
                        >
                          <IconButton
                            onClick={() => {
                              DeleteImage(item._id);
                            }}
                          >
                            <Image src={DeleteIcon} alt="delete" />
                          </IconButton>
                          <img
                            src={item.imageLink}
                            height={150}
                            width={250}
                            alt={item.title}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
