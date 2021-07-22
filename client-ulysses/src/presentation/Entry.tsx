import React from "react";
import { AuthContext } from '../domain/components/authContext';
import useAppContext from '../hooks/useAppContext';

/*const EntryPage: React.FC = (props) => {
    return (
      <>
        <h1>Hello From Entry Page</h1>
      </>
    );
  };*/

  const EntryPage = () =>{

    //const{ userInfo } = React.useContext(AuthContext);
    const {currentUser} = useAppContext();
    return (
        <>
          <h1>Hello From Entry Page</h1>
        </>
      );
  };

  export default EntryPage;