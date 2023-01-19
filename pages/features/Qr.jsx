import React, { useState } from 'react';
import axios from 'axios';
import CommonNavbar from '../../Eventpage/CommonNavbar';
import { Footer } from '../../components';

const Qr = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://csa-backend-iuwv.onrender.com/api/qr?url=${url}`, {
        responseType: 'blob',
        headers: {
          'Content-Disposition': `attachment; filename="qr-code-${url.replace(/[^a-zA-Z0-9]/g, '')}.png"`,
        },
      });
      const objectUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = objectUrl;
      link.setAttribute('download', 'qr-code.png');
      document.body.appendChild(link);
      link.dispatchEvent(new MouseEvent('click'));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <CommonNavbar />
      <div className="container mx-auto  mt-[30px] flex flex-col items-center justify-center ">
        <form
          className=" p-6 rounded-lg shadow-md max-w-lg flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="gradient__text qr-text mb-4">Generate QR Code</h2>
          <div className="relative w-full">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="URL"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
          </div>
          <button
            className="cursor-pointer mx-auto mt-[50px] mb-[60px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-600 rounded hover:text-red-600"
            type="submit"
          >
            {isLoading ? <img src="/loading.gif" alt="loading " className="object-cover h-48 w-96" /> : 'Download QR Code'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Qr;

