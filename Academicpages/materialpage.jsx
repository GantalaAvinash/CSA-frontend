import { useState, useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { FaSearchengin } from 'react-icons/fa'
import styles from '../styles'

const materialPage = () => {


  const [batch, setBatch] = useState([]);
  const [semester, setSemester] = useState([]);
  const [subject, setSubject] = useState([]);
  const [subjectLink, setSubjectLink] = useState([]);
  const [enable, setEnable] = useState(true);
  const [enableSub, setEnableSub] = useState(true);
  const [enableBtn, setEnableBtn] = useState(true);

  const baseUrl = 'https://csa-backend-iuwv.onrender.com/api';
  useEffect(() => {
    axios.get(`${baseUrl}/getbatch`)
      .then((response) => {
        setBatch(response.data.batch);
      })
      .catch((error) => { console.error(error); });
  }, []);

    const handleBatch = async(e) => {
      const batchId = e.target.value;
      if(batchId!=='') {
        const reqsemdata = await fetch(`${baseUrl}/getsembybatch/${batchId}`);
        const semdata = await reqsemdata.json();
        setSemester(semdata.semester);
        setEnable(false);
      } else {
        setSemester([]);
        setEnable(true);
      }
    }

    const handleSemester = async(e) => {
      const semId = e.target.value;
      if(semId!=='') {
        const reqsubdata = await fetch(`${baseUrl}/getsubjectbysem/${semId}`);
        const subdata = await reqsubdata.json();
        setSubject(subdata.subject);
        setEnableSub(false);
      } else {
        setSubject([]);
        setEnableSub(true);
      }
    }

    const handleSubject = async(e) => {
      const subId = e.target.value;
      const subjectLink = e.target.value;
      if(subId!=='') {
        setSubjectLink(subjectLink);
        setEnableBtn(false);
      } else {
        setSubjectLink([]);
        setEnableBtn(true);
      }
    }

    return (
        <div className='container mx-auto my-10 mt-[60px] flex flex-col items-center justify-center '>
          <div className="w-full md:w-1/3 mt-[30px]">
            <select onChange={handleBatch} className="bg-white rounded-md border-2 border-gray-300 py-4 px-6 block w-full  text-gray-700">
                <option value="">Select Batch</option>
                {batch ? batch.length ? batch.map( (getbatch, index ) => (
                  <option value={getbatch.batchId} key={index}>{getbatch.batchYear}</option>
                )) : <option value="">Loading...</option> : <option value="">Loading...</option>}
            </select>
          </div>
          <div className="w-full md:w-1/3 mt-[30px]">
            <select onChange={handleSemester} className="bg-white rounded-md border-2 border-gray-300 py-4 px-6 block w-full  text-gray-700" disabled={enable}>
              <option value="">Select Semester</option>
              {semester ? semester.length ? semester.map( (getsemester, index ) => (
                <option value={getsemester.semId} key={index}>{getsemester.semester}</option>
              )) : <option value="">Loading Semester...</option> : <option value="">Loading...</option>}
            </select>
          </div>
          <div className="w-full md:w-1/3  my-20">
            <select onChange={handleSubject} className="bg-white mt-[30px] rounded-md border-2 border-gray-300 py-4 px-6 block w-full text-gray-700" disabled={enableSub}>
              <option value="">Select Subject</option>
              {subject ? subject.length ? subject.map( (getsubject, index ) => (
                <option value={getsubject.subId, getsubject.subjectLink} key={index}>{getsubject.subjectName}</option>
              )) : <option value="">Loading Subjects...</option> : <option value="">Loading...</option>}
            </select>
          </div>
          <div className="my-20">
            <Link href={subjectLink} target='_blank' className="cursor-pointer mx-auto">
              <button type="button" className="cursor-pointer mx-auto mt-[60px] mb-[60px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-600 rounded hover:text-red-600 ...">
              Show More..
              </button>
            </Link>
          </div>
        </div>
    )
}

export default materialPage
