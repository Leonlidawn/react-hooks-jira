export const List = ({users, projectlist}) => {
  return <table>
    <thead>
      <tr> 
        <th>Name</th>
        <th>Assignee</th>
      </tr>
    </thead>
    <tbody>
      {
        projectlist.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user=>user.id === project.personId)?.name || 'Unknown'}
          </td>
        </tr>)
      }
    </tbody>
  </table>
}