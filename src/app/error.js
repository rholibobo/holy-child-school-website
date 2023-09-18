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
    <Box sx={{ width: "100%", height: "80vh" }}>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          color="GrayText"
          fontWeight="bold"
          sx={{ fontSize: "5rem" }}
          gutterBottom
        >
          500
        </Typography>
        <Typography variant="body1"  color="red" gutterBottom>
          Internal Server Error
        </Typography>
        <Typography variant="subtitle2" color="GrayText" gutterBottom>
          Something went wrong (:
        </Typography>

            <br />
            <br />
        <Box sx={{ display: "flex", gap: "100px" }}>
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize" }}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize" }}
          onClick={() => router.push("/")}
        >
          Home
        </Button>
      </Box>
      </Box>

      
    </Box>
  );
}
