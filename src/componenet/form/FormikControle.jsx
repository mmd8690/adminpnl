import React from "react";
import File from "./File";
import Input from "./Input";
import Select from "./Select";
import Switch from "./Switch";
import Textarea from "./Textarea";
import MultiSelect from "./MultiSelect";
import SearchableSelect from "./SearchableSelect ";
import CKeditor from "./CKeditor";

const FormikControl = (props) => {
  switch (props.control) {
    case "select":
      return <Select {...props} />;
    case "ckeditor":
      return <CKeditor />;
    case "multiselect":
      return <MultiSelect {...props} />;
    case "searchableSelect":
      return <SearchableSelect {...props} />;
    case "input":
      return <Input {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    case "file":
      return <File {...props} />;
    case "switch":
      return <Switch {...props} />;
    default:
      return null;
  }
};

export default FormikControl;
