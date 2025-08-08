import React, { useEffect, useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import ActionButton from "../../components/ActionButton";
import FormInput from "../../components/FormInput";

const categories = [
  "Business",
  "Education",
  "Health",
  "Technology",
  "Finance",
  "Entertainment",
  "Sports",
  "Lifestyle",
  "Art",
  "Science",
  "Travel",
  "Food",
  "Politics",
  "Environment",
  "History",
  "Literature",
  "Marketing",
  "Music",
  "Fashion",
  "Photography",
  "Programming",
  "Religion",
  "Nonprofit",
  "Gaming",
  "Automotive",
  "News",
  "Parenting",
  "Real Estate",
  "Law",
  "Engineering",
  "Psychology",
  "Social Media",
  "Productivity",
  "Design",
  "Culture",
  "Startups",
  "E-commerce",
  "Crypto",
  "AI & Machine Learning",
];
type Props = {
  onClose: () => void;
};

const CreateWorkspaceModal = ({ onClose }: Props) => {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const formData = {
      name,
      visibility,
      description,
      rules,
      image,
      category,
    };
    setHasSubmitted(true);

    if (!name || !description || !rules || !image || !category) {
      alert("Please fill in all fields and upload an image.");
    } else {
      console.log("📝 Submitted Workspace:", formData);
    }
  };
  // 🔑 Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        e.preventDefault();
        // 🔑 Log the escape key pres s
        console.log("🔑 Escape key pressed, closing modal");

        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
      <div className="bg-noble-black-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto p-8 font-plus space-y-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">
            Create New Workspace
          </h2>
          <button
            onClick={onClose}
            className="text-noble-black-300 hover:text-white transition"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Upload Image */}
        <label className="flex items-center gap-4 bg-noble-black-700 p-4 rounded-lg cursor-pointer hover:bg-noble-black-600 transition">
          <div className="bg-noble-black-600 p-3 rounded-lg">
            <FiUpload className="text-white text-xl" />
          </div>
          <div>
            <p className="text-noble-black-100">
              {image ? image.name : "Upload Workspace Image"}
            </p>
            <p className="text-noble-black-400 text-xs">
              Recommended: 400x400px. Max 2MB.
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        {!image && hasSubmitted && (
          <p className="text-red-500 text-xs">Image is required</p>
        )}

        {/* Name Input */}
        <div>
          <label className="text-sm text-noble-black-200 block mb-1">
            Name
          </label>
          <FormInput
            placeholder="Workspace Name"
            onChange={(e) => setName(e.target.value)}
          />
          {!name && hasSubmitted && (
            <p className="text-red-500 text-xs">Name is required</p>
          )}
        </div>

        {/* Visibility */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label className="text-sm text-noble-black-200">Visibility</label>
          <div className="flex gap-4">
            {["public", "private"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-sm text-white"
              >
                <input
                  type="radio"
                  name="visibility"
                  value={option}
                  checked={visibility === option}
                  onChange={() => setVisibility(option)}
                  className="accent-day-blue-500"
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
        </div>
        {/* Category Select */}
        <div>
          <label className="text-sm text-noble-black-200 block mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-md bg-noble-black-700 text-white outline-none"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {!category && hasSubmitted && (
            <p className="text-red-500 text-xs">Category is required</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-noble-black-200 block mb-1">
            Description
          </label>
          <div className="relative p-[2px] rounded-lg bg-transparent transition focus-within:bg-gradient-blue-green-500 focus-within:shadow-[0_0_0_3px_#82dbf7,0_0_10px_#b6f09c]">
            <textarea
              className="w-full p-3 rounded-md bg-noble-black-700 text-white h-24 resize-none outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Purpose of the workspace"
            />
          </div>
          {!description && hasSubmitted && (
            <p className="text-red-500 text-xs">Description is required</p>
          )}
        </div>

        {/* Rules */}
        <div>
          <label className="text-sm text-noble-black-200 block mb-1">
            Rules and Regulations
          </label>
          <div className="relative p-[2px] rounded-lg bg-transparent transition focus-within:bg-gradient-blue-green-500 focus-within:shadow-[0_0_0_3px_#82dbf7,0_0_10px_#b6f09c]">
            <textarea
              className="w-full p-3 rounded-md bg-noble-black-700 text-white h-24 resize-none outline-none"
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              placeholder="Workspace rules and expectations"
            />
          </div>
          {!rules && hasSubmitted && (
            <p className="text-red-500 text-xs">Rules are required</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <ActionButton text="Cancel" active={false} onClick={onClose} />
          <ActionButton text="Create Workspace" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkspaceModal;
