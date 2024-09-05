/* eslint-disable no-unused-vars */

import React, { useState } from "react";
// import { Button } from "../ui/Button";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const LeetCodeUI = () => {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

  const runCode = () => {
    // This is a mock function. In a real application, you'd send the code to a backend for execution.
    setOutput("Code execution result will appear here.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Coding Practice</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Problem: Two Sum</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that they add up to target.
            </p>
            <p className="mt-4">Example:</p>
            <pre className="bg-gray-100 p-2 rounded mt-2">
              Input: nums = [2,7,11,15], target = 9 Output: [0,1]
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full h-64 p-2 border rounded font-mono"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button className="mt-4" onClick={runCode}>
              Run Code
            </Button>
            <div className="mt-4">
              <h3 className="font-bold">Output:</h3>
              <pre className="bg-gray-100 p-2 rounded mt-2">{output}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeetCodeUI;
