import Layout from "../components/common/Layout";
import { useState } from "react";
import styles from "./Ranking.module.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(index, summonerId, tier, lp, top4Count, top4Rate, Games) {
  return { index, summonerId, tier, lp, top4Count, top4Rate, Games };
}

let rows = [];

for (let i = 1; i <= 100; i++) {
  rows.push(createData(i, "abc", "Chanllenger", 100032, 322, 70.22, 500));
}

const Ranking = () => {
  const [region, setRegion] = useState("kr");
  const [tier, setTier] = useState("challenger");

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  const handleChangeTier = (event) => {
    setTier(event.target.value);
  };

  const handleInputChange = (event) => {
    // 입력값 처리하는 로직 작성
  };

  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1>랭킹</h1>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.contentsDetails}>
          <span>
            TFT.PO.GG에서 제공하는 TFT 랭킹입니다. 전체 랭킹, 지역별 랭킹 등을
            확인할 수 있습니다.
          </span>
        </div>
        <div className={styles.filter}>
          <Box>
            <FormControl>
              <Select
                id="region"
                value={region}
                onChange={handleChangeRegion}
                sx={{
                  color: "white",
                  height: 40,
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#424254",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#424254",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#424254",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "#7b7a8e",
                  },
                  fontSize: 14,
                }}
              >
                <MenuItem value="kr">KR</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <Select
                id="tier"
                value={tier}
                onChange={handleChangeTier}
                sx={{
                  color: "white",
                  height: 40,
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#424254",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#424254",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#424254",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "#7b7a8e",
                  },
                  fontSize: 14,
                }}
              >
                <MenuItem value="challenger">Challenger</MenuItem>
                <MenuItem value="grandmaster">Grandmaster</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className={styles.searchContainer}>
            <TextField
              sx={{
                height: 40,
                minWidth: 20,
                background: "black",
                borderRadius: "5px",
                color: "#1c1c1f",
              }}
              InputProps={{
                sx: { height: 40, color: "white", fontSize: 14 },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#7b7a8e" }} />
                  </InputAdornment>
                ),
                classes: {
                  input: {
                    color: "white",
                    height: 40,
                  },
                },
              }}
              placeholder="Search a summoner"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 650,
                fontSize: 12,
                backgroundColor: "#31313c",
              }}
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}>
                    #
                  </TableCell>
                  <TableCell sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}>
                    소환사
                  </TableCell>
                  <TableCell
                    sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                    align="right"
                  >
                    티어
                  </TableCell>
                  <TableCell
                    sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                    align="right"
                  >
                    LP
                  </TableCell>
                  <TableCell
                    sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                    align="right"
                  >
                    순방 횟수
                  </TableCell>
                  <TableCell
                    sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                    align="right"
                  >
                    순방 확률
                  </TableCell>
                  <TableCell
                    sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                    align="right"
                  >
                    게임 수
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                      component="th"
                      scope="row"
                    >
                      {row.index}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                    >
                      {row.summonerId}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                      align="right"
                    >
                      {row.tier}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                      align="right"
                    >
                      {row.lp}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                      align="right"
                    >
                      {row.top4Count}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                      align="right"
                    >
                      {row.top4Rate}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7b7a8e", borderColor: "#1c1c1f" }}
                      align="right"
                    >
                      {row.Games}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Ranking;
