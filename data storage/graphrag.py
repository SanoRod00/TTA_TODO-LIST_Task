# graphrag.py
graph = {
    "Einstein": {"worked_at": "Princeton", "won": "Nobel Prize"},
    "Princeton": {"location": "New Jersey"}
}

def graph_rag(question):
    if "work" in question.lower():
        return f"Einstein worked at {graph['Einstein']['worked_at']}!"
    elif "nobel" in question.lower():
        return f"He won the {graph['Einstein']['won']}!"
    else:
        return "Hmm, let me check my graph..."

# Test the function
print(graph_rag("Where did prince work?"))