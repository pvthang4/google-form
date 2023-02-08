import imageCloudUpload from "../../../assets/Images/Image_cloud_upload.svg";

const UploadFile = ({}: any) => {
  return (
    <div className="modal__block">
      <div className="modal__header">
        <p>画像の挿入</p>
      </div>
      <div className="modal__body">
        <input type="image" src={imageCloudUpload} alt="picture" />
        <div>
          <button>参照</button>
        </div>
        <p>または、ここにファイルをドラッグしてください</p>
      </div>
    </div>
  );
};

export default UploadFile;
