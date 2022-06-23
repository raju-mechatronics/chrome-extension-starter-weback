import React, { useEffect, useState } from 'react';

const UrlHandler = () => {
  const [url, setUrl] = useState('');
  const [clear, setClear] = useState(true);

  useEffect(() => {
    chrome.storage.local.get('url').then(({ url }) => setUrl(url));
    chrome.storage.local.get('clear').then(({ clear }) => setClear(clear));
  }, []);

  return (
    <div style={{ fontSize: 16, padding: 8 }}>
      <input
        type="text"
        className="form-control"
        style={{
          width: '200px',
          padding: '5px',
          fontSize: 16,
        }}
        name="url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        placeholder={'your api endpoint'}
      />
      <div style={{ margin: 5, padding: 5 }}>
        <input
          type={'checkbox'}
          onChange={(e) => {
            // eslint-disable-next-line prettier/prettier
            // @ts-ignore
            setClear(e.target.checked);
          }}
          checked={clear}
        />
        <label>Clear cookies on signout</label>
      </div>
      <button
        type="submit"
        style={{
          padding: '5px',
          fontSize: 16,
        }}
        onClick={(e) => {
          e.preventDefault();
          console.log(url);
          chrome.storage.local.set({ url: url, clear: clear });
        }}
      >
        Save
      </button>
    </div>
  );
};

export default UrlHandler;
