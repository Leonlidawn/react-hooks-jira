import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject } from "utils";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;


export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });

  const [projectList, setprojectList] = useState([]);
  const [users, setUsers] = useState([]);



  useEffect(() => {
    const url = `${ apiUrl }/projects?${ qs.stringify(cleanObject(param)) }`;
    console.log(qs.stringify(cleanObject(param)));
    fetch(url).then(async response => {
      if (response.ok) {
        // response.json returns a promise, which returns converted json from response result when resolved
        setprojectList(await response.json());
      }
    });
  }, [param]);

  useEffect(() => {
    fetch(`${ apiUrl }/users`).then(async response => {
      if (response.ok) {
        // response.json returns a promise, which returns converted json from response result when resolved
        setUsers(await response.json());
      }
    });
  }, [param]);

  return <div>
    <SearchPanel users={ users } param={ param } setParam={ setParam } />
    <List users={ users } projectlist={ projectList } />

  </div>;
};