"use client";
import { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            color="GrayText"
            fontWeight="bold"
            sx={{ fontSize: "10rem" }}
            gutterBottom
          >
            500
            <Typography variant="body1" textAlign="center" color="red" gutterBottom>
              Internal Server Error
            </Typography>
            <Typography variant="subtitle2" textAlign="center"  color="GrayText" gutterBottom>
              Something went wrong (:
            </Typography>
          </Typography>
        </Box>

        <br />
        
        <Box sx={{ display: "flex", gap: "100px" }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize", border: "1px solid grey", color: "grey" }}
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize", border: "1px solid grey", color: "grey"  }}
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
