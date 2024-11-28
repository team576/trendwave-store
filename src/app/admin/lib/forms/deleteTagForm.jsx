"use client";

import { deleteTag } from "../actions/tagActions";

function DeleteButton() {
    const handleRefresh = () => {
        location.reload();
    }

  return (
    <button 
        onClick={handleRefresh}
        type="submit"  
        className="rounded p-2 border border-red-600">
      Видалити
    </button>
  );
}

export function DeleteForm({ id, tag }) {
    console.log('dele', tag)
  
  return (
    <form action={deleteTag}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="tag" value={tag} />
      <DeleteButton />
      
    </form>
  );
}