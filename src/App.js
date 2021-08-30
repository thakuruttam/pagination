import { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid';
import Table from './components/table'
import Navbar from './components/navbar'


function App() {
  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(0)
  const [perpage, setPerpage] = useState(6);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    fetch(`https://reqres.in/api/users?page=${pageNum + 1}`)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.data)
          setPerpage(result.per_page)
          setTotal(result.total)
          setLoading(false)
        }
      )
  }, [pageNum])
  return (
    <div>
      <Navbar />
      <br />

      <Grid container justifyContent="center">
        <Grid item xs={11} md={8}>
          {loading ? <p>Loading...</p> : <Table data={data} perpage={perpage} total={total} pageNum={pageNum} setPageNum={setPageNum} />}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
