import axios from 'axios';

export const getData = async afterFetch => {
  try {
    const res = await axios.get('http://localhost:4444/members');
    console.log("got data:", res.data)
    afterFetch(res.data);
  } catch(err)  {
    console.log('ERROR', err);
  }
};

// Add a member and then perform an optional action
export const addMember = async (memberData, setMembers) => {
  try {
    const res = await axios.post('http://localhost:4444/members', memberData);
    
    getData(setMembers)
  } catch(err) {
    console.log('ERROR', err)
  }
}

// Add a member and then perform an optional action
export const updateMember = async (memberData, setMembers) => {
  try {
    const res = await axios.patch(`http://localhost:4444/members/${memberData.id}`, memberData);
    
    getData(setMembers)
  } catch(err) {
    console.log('ERROR', err)
  }
}