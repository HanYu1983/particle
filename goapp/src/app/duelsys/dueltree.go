package duelsys

type Node int
type LinkTo [2]Node
type Tree struct {
	Nodes []Node
	Links []LinkTo
}

var (
	NullNode = Node(-10000)
)

func (node Node) ToString() string {
	return string(node)
}

func AppendLayer(layer []Node, curridx int) ([]Node, []LinkTo, int) {
	var newLayer []Node
	var links []LinkTo
	// 如果只有一個節點，代表不必建立樹，直接回傳
	if len(layer) <= 1 {
		return newLayer, links, curridx
	}
	var lastNode Node
	var pair []Node
	// 每收集到一個對，就加入新節點和連結
	for _, node := range layer {
		pair = append(pair, node)
		if len(pair) == 2 {
			// 新節點
			lastNode = Node(curridx)
			newLayer = append(newLayer, lastNode)
			// 將成對中的每一個節點連結新節點
			link := LinkTo{pair[0], lastNode}
			link2 := LinkTo{pair[1], lastNode}
			links = append(links, link)
			links = append(links, link2)
			// 清空對，準備下一次處理
			pair = []Node{}
			// 準備下一個節點ID
			curridx++
		}
	}
	// 如果對中還剩下沒有處理的
	if len(pair) == 1 {
		// 將沒處理到節點也一併連結到最新的節點中
		link3 := LinkTo{pair[0], lastNode}
		links = append(links, link3)
	}
	return newLayer, links, curridx
}

func CreateDuelTree(cnt int) Tree {
	var nodes []Node
	var links []LinkTo

	var layer []Node
	var idx int
	for ; idx < cnt; idx++ {
		layer = append(layer, Node(idx))
	}
	nodes = append(nodes, layer...)

	for len(layer) > 1 {
		newlayer, newlinks, newidx := AppendLayer(layer, idx)
		links = append(links, newlinks...)
		nodes = append(nodes, newlayer...)
		idx = newidx
		layer = newlayer
	}

	return Tree{nodes, links}
}

// 找出下一層節點
func ForwardNode(tree Tree, node Node) Node {
	for _, currlink := range tree.Links {
		if currlink[0] == node {
			return currlink[1]
		}
	}
	return NullNode
}

// 找出相隣節點
func NextNodes(tree Tree, node Node) []Node {
	forward := ForwardNode(tree, node)
	if forward == NullNode {
		return nil
	}
	var nodes []Node
	for _, currlink := range tree.Links {
		if currlink[1] == forward && currlink[0] != node {
			nodes = append(nodes, currlink[0])
		}
	}
	return nodes
}

func IsTopOfTree(tree Tree, node Node) bool {
	return len(tree.Nodes)-1 == int(node)
}
