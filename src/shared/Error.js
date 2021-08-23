import { Modal } from "antd";


export function ErrorMessage ({title, message}) {

        Modal.error({
          title:{title},
          centered:true,
            width:1000,
          content: {message},
        })
    }