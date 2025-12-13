'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';

export default function VideoUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Upload Video to Vercel Blob</h1>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            setError(null);
            setUploading(true);

            if (!inputFileRef.current?.files) {
              setError('No file selected');
              setUploading(false);
              return;
            }

            const file = inputFileRef.current.files[0];

            // Check file size (4.5 MB limit for server uploads)
            if (file.size > 4.5 * 1024 * 1024) {
              setError('File size exceeds 4.5 MB limit. Please use client upload for larger files.');
              setUploading(false);
              return;
            }

            try {
              const response = await fetch(
                `/api/video/upload?filename=${encodeURIComponent(file.name)}`,
                {
                  method: 'POST',
                  body: file,
                },
              );

              if (!response.ok) {
                throw new Error('Upload failed');
              }

              const newBlob = (await response.json()) as PutBlobResult;
              setBlob(newBlob);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Upload failed');
            } finally {
              setUploading(false);
            }
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
              Select Video File
            </label>
            <input
              id="file"
              name="file"
              ref={inputFileRef}
              type="file"
              accept="video/mp4, video/webm, video/ogg"
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700"
            />
            <p className="mt-2 text-sm text-gray-500">
              Maximum file size: 4.5 MB (for server uploads)
            </p>
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload Video'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {blob && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Successful!</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Blob URL:</span>
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={blob.url}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(blob.url);
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm"
                >
                  Copy
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Add this URL to your <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_VIDEO_BLOB_URL</code> environment variable
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

