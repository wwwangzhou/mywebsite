if [ $(ps -u wangzhou | awk '{if ($5 == "vim") print $0;}' | wc -l) -gt 0 ]; then
	 echo "Vim is running"
   tmux set-option status-position top
else
	 echo "No vim is running"
   tmux set-option status-position bottom
fi
