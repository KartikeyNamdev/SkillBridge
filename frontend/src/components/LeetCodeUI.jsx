import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const problems = [
  {
    id: 1,
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]",
    starterCode: "def twoSum(nums, target):\n    # Your code here\n    pass",
  },
  {
    id: 2,
    title: "Reverse String",
    description: "Write a function that reverses a string. The input string is given as an array of characters s.",
    example: "Input: s = ['h','e','l','l','o']\nOutput: ['o','l','l','e','h']",
    starterCode: "def reverseString(s):\n    # Your code here\n    pass",
  },
  {
    id: 3,
    title: "Palindrome Number",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    example: "Input: x = 121\nOutput: true\n\nInput: x = -121\nOutput: false",
    starterCode: "def isPalindrome(x):\n    # Your code here\n    pass",
  },
];

const LeetCodeUI = () => {
  const [selectedProblem, setSelectedProblem] = useState(problems[0]);
  const [code, setCode] = useState(selectedProblem.starterCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    // This is a mock function. In a real application, you'd send the code to a backend for execution.
    setOutput(`Executing code for problem: ${selectedProblem.title}\n\n// Mock output\nCode execution successful!`);
  };

  const handleProblemChange = (problemId) => {
    const problem = problems.find(p => p.id === parseInt(problemId));
    setSelectedProblem(problem);
    setCode(problem.starterCode);
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">
          Advanced Coding Practice
        </h1>
        <div className="mb-6">
          <Select onValueChange={handleProblemChange}>
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue placeholder="Select a problem" />
            </SelectTrigger>
            <SelectContent>
              {problems.map((problem) => (
                <SelectItem key={problem.id} value={problem.id.toString()}>
                  {problem.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-purple-100 border-2 border-purple-300 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
            <CardHeader className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <CardTitle className="text-2xl font-semibold text-gray-800">{selectedProblem.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 mb-4">{selectedProblem.description}</p>
              <p className="text-gray-700 font-semibold mt-4">Example:</p>
              <SyntaxHighlighter language="python" style={tomorrow} className="mt-2 text-sm rounded-lg">
                {selectedProblem.example}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
          <Card className="bg-blue-100 border-2 border-blue-300 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
            <CardHeader className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
              <CardTitle className="text-2xl font-semibold text-gray-800">Code Editor</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <SyntaxHighlighter
                language="python"
                style={tomorrow}
                className="min-h-[200px] rounded-lg text-sm"
                contentEditable={true}
                onKeyDown={(e) => {
                  if (e.key === 'Tab') {
                    e.preventDefault();
                    const start = e.target.selectionStart;
                    const end = e.target.selectionEnd;
                    const newCode = code.substring(0, start) + "    " + code.substring(end);
                    setCode(newCode);
                    e.target.selectionStart = e.target.selectionEnd = start + 4;
                  }
                }}
                onInput={(e) => setCode(e.currentTarget.textContent)}
              >
                {code}
              </SyntaxHighlighter>
              <Button 
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={runCode}
              >
                Run Code
              </Button>
              <div className="mt-4">
                <h3 className="font-bold text-gray-700 mb-2">Output:</h3>
                <SyntaxHighlighter language="python" style={tomorrow} className="min-h-[100px] rounded-lg text-sm">
                  {output}
                </SyntaxHighlighter>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeUI;