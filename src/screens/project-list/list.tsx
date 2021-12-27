
import {User} from 'types/user';
import {Project} from 'types/project';

interface ListProps {
  users:User[];
  projects:Project[];
}

export const List = ({users, projects}:ListProps) => {
  return <table>
    <thead>
      <tr> 
        <th>Name</th>
        <th>Assignee</th>
      </tr>
    </thead>
    <tbody>
      {
        projects.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user=>user.id === project.personId)?.name || 'Unknown'}
          </td>
        </tr>)
      }
    </tbody>
  </table>
}