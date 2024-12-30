"use client"
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const HandleAddcomment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };

      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const HandleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const HandleSaveEditComment = () => {
    if(newComment.trim() && authorName.trim() && editingCommentId){
      const updateComments = comments.map((comment) => 
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
    
      setComments(updateComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="space-y-4">
            {comments.length > 0 ? (
                comments.map((comment) => {
                    return ( 
                        <Card key={comment.id} className="bg-white shadow-md">
                            <CardContent className="p-4">
                                <div className="font-semibold text-gray-700 mb-2">
                                    {comment.author}
                                </div>
                                <p className="text-gray-600 mb-3">
                                    {comment.text}
                                </p>
                                <Button onClick={() => HandleEditComment(comment.id)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                    Edit
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })
            ) : (
                <p className="text-gray-500 text-center">No Comment yet</p>
            )}
        </div>

        <div className="mt-6 space-y-4">
            <Input 
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <Input 
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button 
            onClick={editingCommentId ? HandleSaveEditComment : HandleAddcomment}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                {editingCommentId ? 'Save' : 'Submit'}
            </Button>
        </div>
    </div>
  );
}